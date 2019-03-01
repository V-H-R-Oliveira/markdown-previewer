import React from 'react';
import marked from 'marked';
import '../App.css';

const options = {
  pedantic: false,
  gfm: true,
  tables: true,
  smartLists: true,
  smartypants: true,
  sanitize: true,
  headerIds: false,
  breaks: true
};

marked.setOptions(options);

export default props => 
{
    const createMarkup = input => ({__html: input});
    
    return <div className="output" dangerouslySetInnerHTML={createMarkup(marked(props.input))} />;
}

