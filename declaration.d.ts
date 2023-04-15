declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.png' {
  const url: string;
  export default url;
}
declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.jpeg' {
  const url: string;
  export default url;
}
declare module '*.gif' {
  const url: string;
  export default url;
}

declare module '*.webp' {
  const url: string;
  export default url;
}

declare module '*.ico' {
  const url: string;
  export default url;
}

declare module '*.bmp' {
  const url: string;
  export default url;
}
declare module '*.svg' {
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}
