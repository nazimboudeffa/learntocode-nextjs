import Link from "next/link";

const Navbar: React.FC = () => {

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-zinc-100'>
			<div className="flex w-full items-center justify-between">
                <div className='h-[22px] flex-1'>
                    <Link 
                        href='/'
                    >
                        Code 101
                    </Link>
                </div>
				<div className='flex items-center space-x-4 flex-1 justify-end'>
                    <Link
                        href='https://fr.tipeee.com/nazimboudeffa'
                        className='py-1.5 px-3 cursor-pointer rounded text-brand-orange'
                    >
                        Tip!
                    </Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;