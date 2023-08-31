import React, { useEffect } from 'react';
import { DescSection } from './Desc.styled';
import { MD_TEXT } from 'utils/const';
import { Viewer } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import { useLocation } from 'react-router-dom';
import DescFooter from 'components/common/DescFooter/DescFooter';
import { AuthorData } from 'author-data';

interface DescProps {
  contents?: string,
  groupId: string,
  userData?: AuthorData,
}

const Desc = ({ contents, groupId, userData }: DescProps) => {

  const location = useLocation();

  // 전체 URL 생성
  const fullURL = `${window.location.origin}${location.pathname}${location.search}`;

  useEffect(() => {
    // console.log(contents, groupId);
  }, [contents, groupId]);

  return (
    <DescSection>
      <Viewer
        initialValue={contents || ''}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <DescFooter $url={fullURL} groupId={groupId} userData={userData} />
    </DescSection>
  );
};

export default Desc;