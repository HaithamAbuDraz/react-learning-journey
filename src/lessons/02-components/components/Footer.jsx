function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <p>© {year} React Learning Journey</p>
    </footer>
  );
}

export default Footer;
