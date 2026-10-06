(function () {
  window.Components = window.Components || {};

  window.Components.profile = {
    render(container, section, config) {
      const page = document.createElement("div");
      page.className = "section section-profile";
      page.style.visibility = "hidden";

      // 固定展示区域，横图竖图都完整显示。
      const stage = document.createElement("div");
      stage.style.cssText = `
        position: relative;
        width: min(80vw, 340px);
        height: min(45vh, 360px);
        flex-shrink: 0;
      `;

      const paths = config.photos && config.photos.length
        ? config.photos
        : [config.photo];

      paths.forEach(function (path, index) {
        const photo = document.createElement("img");
        photo.src = path;
        photo.alt = "溜溜的照片 " + (index + 1);
        photo.className = "birthday-slide";
        photo.style.cssText = `
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
          opacity: 0;
        `;
        stage.appendChild(photo);
      });

      const wish = document.createElement("div");
      wish.className = "wish";

      const title = document.createElement("h3");
      title.className = "wish-hbd";
      title.textContent = section.wishTitle || "生日快乐！";
      title.style.color = "var(--primary)";

      const message = document.createElement("h5");
      message.className = "wish-text";
      message.textContent = section.wishText || "";

      wish.append(title, message);
      page.append(stage, wish);
      container.appendChild(page);
      return page;
    },

    animate(tl, el) {
      const photos = el.querySelectorAll(".birthday-slide");
      const wish = el.querySelector(".wish");

      // 重播时也从第一张开始。
      tl.set(el, { autoAlpha: 1, y: 0 });
      tl.set(photos, { opacity: 0 });

      tl.fromTo(
        wish,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      photos.forEach(function (photo, index) {
        // 照片淡入。
        tl.fromTo(
          photo,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 }
        );

        // 完整展示两秒。
        tl.to({}, { duration: 2 });

        // 最后一张保留，陪伴后续烟花动画。
        if (index < photos.length - 1) {
          tl.to(photo, { opacity: 0, duration: 0.3 });
        }
      });
    },

    exit(tl, el) {
      tl.to(el, {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
      });
    },
  };
})();