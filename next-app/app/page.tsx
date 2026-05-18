import fs from "fs";
import path from "path";
import Script from "next/script";

const getHomeBodyHtml = () => {
  const rootPath = path.join(process.cwd(), "..", "index.html");
  const html = fs.readFileSync(rootPath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return "";
  const bodyHtml = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "");
  return bodyHtml;
};

export const metadata = {
  title: "Home - Karyotica Labs - Biostimulants for enhanced agricultural yield",
  description:
    "Our Biostimulants offer sustainable growing in Canada with improved capacity, soil health, enhanced plant growth, and higher yields in agriculture.",
};

export default function Home() {
  const bodyHtml = getHomeBodyHtml();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />

      <Script
        src="/assets/shared/js/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/shared/js/jquery-migrate.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/shared/js/webpack.runtime.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/shared/js/frontend-modules.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/shared/js/core.min.js" strategy="afterInteractive" />
      <Script
        id="elementor-frontend-js-before"
        strategy="beforeInteractive"
      >
        {`var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"4.0.2","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"import-export-customization":true},"urls":{"assets":"https://karyotica.ca/wp-content/plugins/elementor/assets/","ajaxurl":"https://karyotica.ca/wp-admin/admin-ajax.php","uploadUrl":"https://karyotica.ca/wp-content/uploads"},"nonces":{"floatingButtonsClickTracking":"791484b4f3","atomicFormsSendForm":"f757f47314"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet","viewport_laptop"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":7,"title":"Home%20-%20Karyotica%20Labs%20-%20Biostimulants%20for%20enhanced%20agricultural%20yield","excerpt":"","featuredImage":false}};`}
      </Script>
      <Script src="/assets/shared/js/frontend.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/particles.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/jarallax.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/parallax.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/jquery-numerator.min.js" strategy="afterInteractive" />
      <Script src="/assets/pages/index/js/swiper.min.js" strategy="afterInteractive" />
      <Script src="/assets/pages/index/js/aos.min.js" strategy="afterInteractive" />
      <Script src="/assets/pages/index/js/infinite-scroll.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/imagesloaded.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/perfect-scrollbar.min.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/frontend.min-1-.js" strategy="afterInteractive" />
      <Script src="/assets/shared/js/modal-popups.min.js" strategy="afterInteractive" />
    </>
  );
}
