import React from 'react'
import { headingsPlugin, listsPlugin, markdownShortcutPlugin, MDXEditor, quotePlugin,} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css';
import './markdown.scss'


const Markdown = (props) => {
  return (
    <MDXEditor 
    contentEditableClassName='markdown' 
    markdown={props.content}
    onChange={(markdown) => console.log(markdown)}
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      markdownShortcutPlugin()
    ]}/>
  )
}

export default Markdown