import dynamic from "next/dynamic";

export const components = {
  background: dynamic(() => import("./background")),
  banner_video: dynamic(() => import("./bannerVideo")),
  button: dynamic(() => import("./button")),
  discription: dynamic(() => import("./discription")),
  icon: dynamic(() => import("./icon")),
  image: dynamic(() => import("./image")),
  link: dynamic(() => import("./link")),
  text: dynamic(() => import("./text")),
  title_complex: dynamic(() => import("./titleComplex")),
  title_header: dynamic(() => import("./titleHeader")),
  title_header_gradient: dynamic(() => import("./titleHeaderGradient")),
  
  text custom: dynamic(() => import("./Text Custom")),
  text_custom2: dynamic(() => import("./TextCustom2")),
  : dynamic(() => import("./")),
  text_custom2: dynamic(() => import("./TextCustom2")),
  text_custom3: dynamic(() => import("./TextCustom3")),
};
