import Image from "next/image";


export const Header = () => {
	return (
		<header className="h-20 w-full py-6 px-16 flex items-center justify-center absolute top-0 left-0 lg:static z-50">
			<h1 className="opacity-0 w-0 h-0">Movrok</h1>
      <Image src="/assets/images/logo/Movrok-black-logo.png" alt="Movrok logo" width={100} height={100} />
		</header>
	)
}