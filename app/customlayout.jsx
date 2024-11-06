
export default function CustomLayout({ children }) {
  return (
    <div className="absolute w-[100%] top-0 z-50 bg-white">
      {children}
    </div>
  );
}
