import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Built for trainer portfolio review.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
