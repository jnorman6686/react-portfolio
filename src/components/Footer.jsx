const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <span>Chuck Bartowski {currentYear}&copy;</span>
    </footer>
  )
}

export default Footer