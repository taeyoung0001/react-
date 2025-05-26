// ...props 스프레드를 사용해서, 지정하지 않는 props를 꺼내 쓸 수 있다.

const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
