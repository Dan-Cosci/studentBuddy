import React from 'react'
import { headingsPlugin, listsPlugin, markdownShortcutPlugin, MDXEditor, quotePlugin,} from '@mdxeditor/editor'
// import './markdown.scss'


const Markdown = () => {
  return (
    <MDXEditor 
    contentEditableClassName='markdown' 
    markdown='# hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world
    # hello world # hello world' 
    plugins={[headingsPlugin(),listsPlugin(),quotePlugin(),markdownShortcutPlugin(),]}/>
  )
}

export default Markdown