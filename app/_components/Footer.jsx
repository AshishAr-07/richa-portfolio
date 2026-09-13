import Link from "next/link";


const Footer = () => (
    <footer className="bg-surface border-t border-white/8 px-8 md:px-16 py-6 flex flex-wrap items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-muted text-sm tracking-wide m-0">
            © 2026 Richa. All rights reserved.
        </p>

        {/* Social links */}
        <div >
            <p className="text-muted text-xs tracking-wide m-0">
                Developed By <Link href="https://ashishdev07.vercel.app/">Ashish Rawat</Link>
            </p>
        </div>
    </footer>
);

export default Footer;