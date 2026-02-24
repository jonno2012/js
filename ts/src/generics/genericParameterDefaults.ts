declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;


declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
    element?: T,
    children?: U
  ): Container<T, U>;