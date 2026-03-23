const icons = {
  bolt: (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  leaf: (
    <path d="M5 18c7 0 13-5 14-14-9 1-14 7-14 14Zm0 0c0-4 3-7 7-9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  home: (
    <path d="M3 11 12 4l9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chart: (
    <path d="M4 19h16M7 16l4-4 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  sun: (
    <path d="M12 4v2m0 12v2M4 12H2m20 0h-2m-2.34-5.66-1.41 1.41M7.75 16.25l-1.41 1.41m0-11.32 1.41 1.41m8.5 8.5 1.41 1.41M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export default Icon;
