/*
  REDLEV - contenido dinamico

  Edicion mensual:
  1. Abre data/content.json en GitHub.
  2. Edita activities.upcoming[1] para el seminario mensual.
  3. Edita featured_research para el artículo destacado.
  4. Si agregas imágenes, súbelas a assets/img/ y usa esa ruta en el JSON.
*/

(function () {
  const contentUrl = new URL("data/content.json", window.location.href);
  contentUrl.searchParams.set("v", Date.now().toString());
  const $ = (id) => document.getElementById(id);
  const socialIcons = {
    youtube: '<svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M4.4 4h4.7l3.7 5.2L17.3 4h2.2l-5.7 6.6L20 20h-4.7l-4-5.8L6.3 20H4.1l6.2-7.2L4.4 4Zm3.8 1.6 8 12.8h1.6l-8-12.8H8.2Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M14 8.5V7.1c0-.7.5-1.1 1.3-1.1H17V3h-2.6C11.9 3 10 4.7 10 7v1.5H7.8V12H10v9h4v-9h2.7l.5-3.5H14Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.1-2.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>'
  };

  const actions = {
    text(id, value) {
      const el = $(id);
      if (el) el.textContent = value ?? "";
    },
    link(id, url, label) {
      const el = $(id);
      if (!el) return;
      if (!url) {
        el.hidden = true;
        return;
      }
      el.href = url;
      if (label) el.textContent = label;
      el.hidden = false;
    },
    image(id, src, alt) {
      const el = $(id);
      if (!el) return;
      if (!src) {
        el.hidden = true;
        return;
      }
      el.src = src;
      if (alt) el.alt = alt;
      el.hidden = false;
    },
    social(id, url, label, network) {
      const el = $(id);
      if (!el) return;
      if (!url) {
        el.hidden = true;
        return;
      }

      const icon = document.createElement("span");
      icon.className = "social-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = socialIcons[network] || "";

      const text = document.createElement("span");
      text.textContent = label;

      el.href = url;
      el.replaceChildren(icon, text);
      el.hidden = false;
    }
  };

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    bindNavigation();
    actions.text("year", new Date().getFullYear());
    startPanamáClock();

    try {
      const response = await fetch(contentUrl);
      if (!response.ok) throw new Error("No se pudo cargar data/content.json");
      const data = await response.json();

      renderGlobal(data);
      renderHome(data);
      renderActivities(data.activities);
      renderResearch(data.featured_research);
      renderCommittee(data.committee || []);
    } catch (error) {
      console.error(error);
      actions.text(
        "heroObjective",
        "No se pudo cargar el contenido. Revisa data/content.json y la consola del navegador."
      );
    }
  }

  function bindNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = $("nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderGlobal(data) {
    const site = data.site || {};
    const links = data.links || {};

    actions.text("siteName", site.name);
    actions.text("siteTagline", site.tagline);
    actions.text("footerName", site.name);
    actions.text("foundedYear", site.founded_year);
    actions.text("membersCount", site.members_count);
    actions.text("seminarsFrequency", site.seminars_frequency || "Mensual");
    actions.text("timezoneMetricLabel", site.default_timezone_label);

    actions.link("joinLink", links.join_form, "Únete");
    actions.link("joinLink2", links.join_form, data.join_callout?.button_label || "Formulario de registro");
    actions.link("contactLink", links.contact_form, "Contacto");
    actions.link("contactLink2", links.contact_form, "Contacto");
    actions.link("privacyLink", links.privacy_policy, "Privacidad");
    actions.social("youtubeLink", links.youtube, "YouTube", "youtube");
    actions.link("youtubeLink2", links.youtube, "YouTube");
    actions.social("xLink", links.x, "X", "x");
    actions.social("facebookLink", links.facebook_group, "Facebook", "facebook");
    actions.social("instagramLink", links.instagram, "Instagram", "instagram");
    actions.link("linkedinLink", links.linkedin, "LinkedIn");
  }

  function renderHome(data) {
    actions.text("heroTitle", data.site?.tagline);
    actions.text("heroObjective", data.home?.objective);
    actions.text("aboutText", data.about?.intro);
    actions.text("joinCalloutTitle", data.join_callout?.title);
    actions.text("joinCalloutText", data.join_callout?.text);
  }

  function renderActivities(activities = {}) {
    renderUpcomingActivities(activities.upcoming || []);
    renderRecentActivities(activities.recent || []);
  }

  function renderUpcomingActivities(items) {
    const wrap = $("upcomingActivities");
    if (!wrap) return;

    wrap.replaceChildren();

    items.slice(0, 2).forEach((item) => {
      const hasImage = Boolean(item.image);
      const article = document.createElement("article");
      article.className = [
        "card",
        "activity-card",
        hasImage ? "activity-card-with-media" : "activity-card-text",
        item.featured ? "activity-card-featured" : ""
      ].filter(Boolean).join(" ");

      if (hasImage) {
        const media = document.createElement("figure");
        media.className = "activity-media";
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.image_alt || item.title || "Imagen de actividad REDLEV";
        media.appendChild(img);
        article.appendChild(media);
      }

      const body = document.createElement("div");
      body.className = "activity-body";
      body.append(
        textElement("p", item.eyebrow || "Próxima actividad", "eyebrow"),
        textElement("h3", item.title || "Actividad REDLEV", "h3"),
        textElement("p", [item.location, item.date_text].filter(Boolean).join(" · "), "meta"),
        textElement("p", item.description || "", "text")
      );

      if (item.url) {
        const actionsWrap = document.createElement("div");
        actionsWrap.className = "actions";
        const link = document.createElement("a");
        link.className = item.featured ? "button" : "button button-secondary";
        link.href = item.url;
        link.textContent = item.cta_label || "Más información";
        if (/^https?:\/\//.test(item.url)) {
          link.target = "_blank";
          link.rel = "noreferrer";
        }
        actionsWrap.appendChild(link);
        body.appendChild(actionsWrap);
      }

      article.appendChild(body);
      wrap.appendChild(article);
    });
  }

  function renderRecentActivities(items) {
    const wrap = $("recentActivities");
    if (!wrap) return;

    wrap.replaceChildren();

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";

      card.append(
        textElement("h3", item.title || "Seminario REDLEV", "h3"),
        textElement("p", item.subtitle || "", "text"),
        textElement("p", item.speaker || "", "meta")
      );

      if (item.cta_url) {
        const actionsWrap = document.createElement("div");
        actionsWrap.className = "actions";
        const link = document.createElement("a");
        link.className = "button button-secondary";
        link.href = item.cta_url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = item.cta_label || "Ver";
        actionsWrap.appendChild(link);
        card.appendChild(actionsWrap);
      }

      wrap.appendChild(card);
    });
  }

  function renderResearch(research = {}) {
    actions.text("researchEyebrow", research.eyebrow || "Este mes destacamos");
    actions.text("researchTitle", research.title);
    actions.text("researchCitation", research.citation);
    actions.text("researchAbstract", research.abstract);
    actions.link("researchLink", research.paper_url, research.paper_label || "Ver publicación");
    actions.image("researchImage", research.image, research.image_alt || "Imagen de investigación destacada");
  }

  function renderCommittee(items) {
    const wrap = $("committeeGrid");
    if (!wrap) return;

    wrap.replaceChildren();

    items.forEach((member) => {
      const hasImage = Boolean(member.image);
      const card = document.createElement("article");
      card.className = hasImage ? "card committee-card committee-card-with-photo" : "card committee-card";

      if (hasImage) {
        const img = document.createElement("img");
        img.className = "committee-photo";
        img.src = member.image;
        img.alt = member.image_alt || member.name || "Fotografía de integrante del comité";
        card.appendChild(img);
      }

      const body = document.createElement("div");
      body.className = "committee-body";

      const name = document.createElement("h3");
      name.className = "h3";
      if (member.url) {
        const link = document.createElement("a");
        link.href = member.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.className = "committee-name";
        link.textContent = member.name || "Nombre Apellido";
        name.appendChild(link);
      } else {
        name.textContent = member.name || "Nombre Apellido";
      }

      body.append(name, textElement("p", member.credentials || member.focus || "", "text"));
      card.appendChild(body);
      wrap.appendChild(card);
    });
  }

  function textElement(tag, text, className) {
    const el = document.createElement(tag);
    el.className = className;
    el.textContent = text;
    if (!text) el.hidden = true;
    return el;
  }

  function startPanamáClock() {
    const el = $("panamaClock");
    if (!el) return;

    let formatter = null;
    try {
      formatter = new Intl.DateTimeFormat("es-PA", {
        timeZone: "America/Panamá",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    } catch (error) {
      formatter = null;
    }

    const tick = () => {
      if (formatter) {
        el.textContent = formatter.format(new Date());
        return;
      }

      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const panama = new Date(utc - 5 * 3600000);
      const hh = String(panama.getHours()).padStart(2, "0");
      const mm = String(panama.getMinutes()).padStart(2, "0");
      el.textContent = `${hh}:${mm}`;
    };

    tick();
    setInterval(tick, 30000);
  }
})();
