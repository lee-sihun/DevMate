import React from 'react';
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

interface DescProps {
  contents?: string,
  groupId: string
}

const Desc = ({ contents, groupId }: DescProps) => {

  const location = useLocation();

  // 전체 URL 생성
  const fullURL = `${window.location.origin}${location.pathname}${location.search}`;

  return (
    <DescSection>
      <Viewer
        initialValue={contents || MD_TEXT}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <DescFooter $url={fullURL} groupId={groupId} />
    </DescSection>
  );
};

export default Desc;