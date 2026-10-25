import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-4 pl-14">
      <div className="container mx-auto flex flex-col items-center justify-between gap-x-3 gap-y-1 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>SkillStack &copy;{new Date().getFullYear()}. All rights reserved.</p>

        <p className="text-xs">
          Developed by{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:text-accent-foreground"
            href="https://www.gildeopleidingen.nl/"
          >
            Gildeopleidingen
          </Link>
        </p>
      </div>
    </footer>
  )
}
