export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="icon" href="/assets/shared/img/logo-3.png" />

      {/* Core / shared styles (keeps visual parity with the exported site) */}
      <link rel="stylesheet" href="/assets/shared/css/custom-frontend.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/custom-widget-icon-box.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/widget-heading.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/e-animation-grow.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/widget-social-icons.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/custom-apple-webkit.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/widget-divider.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/style.css" />
      <link rel="stylesheet" href="/assets/shared/css/post-6.css" />
      <link rel="stylesheet" href="/assets/shared/css/e-animation-slideInRight.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/widget-image.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/e-animation-slideInLeft.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/custom-widget-icon-list.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/zoomIn.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/fadeIn.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/wpr-animations.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/wpr-link-animations.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/loading-animations.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/button-animations.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/text-animations.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/frontend.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/all.min.css" />
      <link rel="stylesheet" href="/assets/shared/css/css.css" />
      <link rel="stylesheet" href="/assets/shared/css/css-1-.css" />
      <link rel="stylesheet" href="/assets/shared/css/css-2-.css" />
      <link rel="stylesheet" href="/assets/shared/css/css-3-.css" />
      <link rel="stylesheet" href="/assets/shared/css/css-4-.css" />

      {/* Page-specific and plugin styles from the original export */}
      <link rel="stylesheet" href="/assets/pages/index/css/post-7.css" />
      <link rel="stylesheet" href="/assets/shared/css/post-779.css" />
      <link rel="stylesheet" href="/assets/pages/index/css/widget-counter.min.css" />
      <link rel="stylesheet" href="/assets/pages/index/css/swiper.min.css" />
      <link rel="stylesheet" href="/assets/pages/index/css/e-swiper.min.css" />
      <link rel="stylesheet" href="/assets/pages/index/css/fadeInUp.min.css" />
      <link rel="stylesheet" href="/assets/pages/index/css/aos.min.css" />

      {/* Small critical inline styles present in the static export (keeps parity) */}
      <style
        id="wp-img-auto-sizes-contain-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            'img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}',
        }}
      />
      <style
        id="wp-emoji-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            'img.wp-smiley, img.emoji {display: inline !important;border: none !important;box-shadow: none !important;height: 1em !important;width: 1em !important;margin: 0 0.07em !important;vertical-align: -0.1em !important;background: none !important;padding: 0 !important;}',
        }}
      />
      <style
        id="classic-theme-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            '.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}',
        }}
      />

      {/* Light elementor inline helper style */}

      <style id="elementor-frontend-inline-css" dangerouslySetInnerHTML={{ __html: '.wpr-dc-hidden{display:none!important}.wpr-dc-fallback{margin:0;padding:0}' }} />

      {/* WPR lightbox defaults */}
      <style
        id="wpr_lightbox_styles"
        dangerouslySetInnerHTML={{
          __html:
            '.lg-backdrop{background-color:rgba(0,0,0,0.6) !important;}.lg-toolbar,.lg-dropdown{background-color:rgba(0,0,0,0.8) !important;}.lg-dropdown:after{border-bottom-color:rgba(0,0,0,0.8) !important;}.lg-sub-html{background-color:rgba(0,0,0,0.8) !important;}.lg-thumb-outer,.lg-progress-bar{background-color:#444444 !important;}.lg-progress{background-color:#a90707 !important;}.lg-icon{color:#efefef !important;font-size:20px !important;}.lg-icon.lg-toogle-thumb{font-size:24px !important;}.lg-icon:hover,.lg-dropdown-text:hover{color:#ffffff !important;}.lg-sub-html,.lg-dropdown-text{color:#efefef !important;font-size:14px !important;}#lg-counter{color:#efefef !important;font-size:14px !important;}.lg-prev,.lg-next{font-size:35px !important;}.lg-icon{background-color:transparent !important;}#lg-counter{opacity:0.9;}.lg-thumb-outer{padding:0 10px;}.lg-thumb-item{border-radius:0 !important;border:none !important;opacity:0.5;}.lg-thumb-item.active{opacity:1;}',
        }}
      />
    </>
  );
}
