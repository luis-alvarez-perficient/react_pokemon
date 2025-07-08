import "./MainLayout.css";

type Props = {
  header?: React.ReactNode;
  asideLeft?: React.ReactNode;
  asideRight?: React.ReactNode;
  sidenav?: React.ReactNode;
  body?: React.ReactNode;
};

function MainLayout({ header, body, asideLeft, asideRight }: Props) {
  return (
    <>
      {header}
      {/* {sidenav && <nav className="sidenav">{sidenav}</nav>} */}
      <div className="container-main-layout">
        <aside className="aside-left">{asideLeft}</aside>
        <main className="content">{body}</main>
        <aside className="aside-right">{asideRight}</aside>
      </div>
    </>
  );
}

export default MainLayout;
