export default function Footer() {
    return (
        <footer className=" border-t bg-muted/20 py-12">
            <div className="wrapper text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Vertex. All rights reserved.
            </div>
        </footer>
    );
}