export default function Button({ variant = "clair", href, children, ...props }) {
  const styles = {
    clair:
      "flex items-center gap-2 rounded-lg border border-purple-700 px-4 py-2 text-purple-700 bg-purple-100 hover:bg-purple-700 hover:text-white transition-colorsfont-forum font-bold",
    purple:
      "btn bg-purple-700 border-purple-700 text-white hover:bg-purple-50 hover:text-purple-700 font-forum",
  };

  const className = styles[variant];

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
