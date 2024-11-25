import { Link } from '@sk-web-gui/react';
import { getPages } from '@utils/file-tree';
import path from 'path';
import NextLink from 'next/link';
import DefaultLayout from '@layouts/default-layout/default-layout.component';
import { getLayout } from '@services/layout-service';
import { merge } from 'lodash';
import ContentBlock from '@components/block/content-block.component';

const generateTOC = (paths) => {
  const root = {
    startsida: {
      __path: '/',
      __children: {},
    },
  };

  // Build a nested structure of paths
  paths.forEach((path) => {
    if (!path) return; // Skip empty strings
    const segments = path.split('/').filter(Boolean);
    let current = root;
    segments.forEach((segment, index) => {
      if (!current[segment]) {
        current[segment] = {
          __path: index === segments.length - 1 ? path : null,
          __children: {},
        };
      }
      // Ensure all segments get a path for standalone pages
      if (index === segments.length - 1 || !current[segment].__path) {
        current[segment].__path = path;
      }
      current = current[segment].__children;
    });
  });

  // Recursive function to create list elements
  const createList = (obj) => {
    return (
      <ul className="ml-md">
        {Object.keys(obj).map((key) => {
          const { __path, __children } = obj[key];
          return (
            <li key={key}>
              {__path && !__path.includes('[') ?
                <NextLink href={__path} passHref>
                  <Link as="span">/{key}</Link>
                </NextLink>
              : key}
              {Object.keys(__children).length > 0 && createList(__children)}
            </li>
          );
        })}
      </ul>
    );
  };

  return createList(root);
};

function SiteMap({ pages, layoutData }) {
  return (
    <DefaultLayout title={`Yrkesutbildning - Startsida`} layoutData={layoutData}>
      <ContentBlock classNameWrapper="!mt-lg">
        <h1>Sitemap</h1>
        <nav id="sitemap-toc" className="mt-lg">
          {generateTOC(pages)}
        </nav>
      </ContentBlock>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ res }) {
  const pages: string[] = await getPages(path.join('src', 'pages'));
  const layoutProps = await getLayout(res);
  return merge(
    {
      props: { pages },
    },
    layoutProps
  );
}

export default SiteMap;
