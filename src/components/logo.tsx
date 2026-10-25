import Link from 'next/link'
import Image from "next/image";

export default function Logo() {
  return (
    <Link href='/' className='font-serif text-xl font-medium uppercase'>
      <span>
        <Image
          src="/logo_big.png"
          alt="SkillStack"
          width={180}
          height={60}
          priority
          className="h-auto w-[180px]"
        />
      </span>
    </Link>
  )
}