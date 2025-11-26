import Link from "next/link";
import Image from 'next/image';

const Navbar: React.FC = () => {

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-2 sm:px-5 bg-zinc-100'>
			<div className="flex w-full items-center justify-between gap-4">
                <div className='flex items-center flex-1 min-w-0'>
                    <Link 
                        href='/'
                        className='text-xs sm:text-sm md:text-base truncate hover:text-blue-600'
                    >
                        Learn to Code
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-1'>
                    <Link 
                        href='/problems'
                        className='text-sm sm:text-base font-medium hover:text-blue-600 cursor-pointer'
                    >
                        Problems
                    </Link>
                </div>
				<div className='flex items-center justify-end flex-1'>
                    <Link
                        href='https://fr.tipeee.com/nazimboudeffa'
                        className='flex items-center py-1.5 px-1 sm:px-3 cursor-pointer rounded text-brand-orange hover:opacity-80 transition-opacity'
                    >
                        <Image
                            src={'/tipeee_tip_btn.svg'}
                            alt="tip"
                            height={48}
                            width={48}
                            className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16'
                        />
                    </Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
