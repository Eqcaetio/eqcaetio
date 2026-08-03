export default function Button({ variant = "clair", href, children, ...props }) {
  const styles = {
    clair:
      "btn btn-outline bg-purple-50 border-purple-700 text-purple-700 hover:bg-purple-500 hover:text-white font-forum",
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
