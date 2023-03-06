export const MenuList = ({ setMenuOpen, name }) => {
  return (
    <li>
      <a
        href={`#${name.toLowerCase()}`}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        {name}
      </a>
    </li>
  );
};
