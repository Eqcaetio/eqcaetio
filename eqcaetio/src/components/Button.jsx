function Button({ variant = "primary", href, children }) {
  const styles = {
    primary:
      "btn bg-purple-700 border-purple-700 text-white hover:bg-purple-50 hover:text-purple-700",
    secondary:
      "btn btn-outline bg-purple-50 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white",
  };

  const className = styles[variant];

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

export default Button;
