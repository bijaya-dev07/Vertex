export default function Footer() {
    return (
        <footer className="py-6 border-t mt-12">
            <div className="wrapper text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Vertex. All rights reserved.
            </div>
        </footer>
    );
}