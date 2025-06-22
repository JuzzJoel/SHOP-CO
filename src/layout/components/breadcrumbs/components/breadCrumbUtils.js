export function generateBreadcrumbs(location) {
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbs = [{ label: 'Home', link: '/' }];

  pathnames.forEach((pathname) => {
    const link = '/' + pathnames.slice(0, pathnames.indexOf(pathname) + 1).join('/');
    const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
    breadcrumbs.push({ label, link });
  });

  return breadcrumbs;
}
