import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef, useRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import mermaid from 'mermaid'
// import ReactMarkdown from 'react-markdown'
// import MarkdownPreview from '@uiw/react-markdown-preview'
// import { DocsLink } from 'src/components'
import MDEditor from '@uiw/react-md-editor'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36)

const Code = ({ inline, children = [], className, ...props }) => {
  const demoid = useRef(`dome${randomid()}`)
  const code = getCode(children)
  const demo = useRef(null)
  useEffect(() => {
    if (demo.current) {
      try {
        const str = mermaid.render(demoid.current, code, () => null, demo.current)
        // @ts-ignore
        demo.current.innerHTML = str
      } catch (error) {
        // @ts-ignore
        demo.current.innerHTML = error
      }
    }
  }, [code, demo])

  if (
    typeof code === 'string' &&
    typeof className === 'string' &&
    /^language-mermaid/.test(className.toLocaleLowerCase())
  ) {
    return (
      <code ref={demo}>
        <code id={demoid.current} style={{ display: 'none' }} />
      </code>
    )
  }
  return <code className={String(className)}>{children}</code>
}

Code.propTypes = {
  inline: PropTypes.any,
  children: PropTypes.array,
  className: PropTypes.any,
}

const getCode = (arr = []) =>
  arr
    .map((dt) => {
      if (typeof dt === 'string') {
        return dt
      }
      if (dt.props && dt.props.children) {
        return getCode(dt.props.children)
      }
      return false
    })
    .filter(Boolean)
    .join('')

const Colors = () => {
  const [markdownStr, setMarkdownStr] = useState('')

  useEffect(() => {
    import('src/assets/markdown/test-golang-doc/test-golang-doc.md').then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setMarkdownStr(response))
        .catch((err) => console.log(err)),
    )
  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Test coding blog
          {/* <DocsLink href="https://coreui.io/docs/utilities/colors/" /> */}
        </CCardHeader>
        <CCardBody>
          {/* <MarkdownPreview source={markdownStr} /> */}
          <div className="container">
            <MDEditor
              value={markdownStr}
              onChange={setMarkdownStr}
              previewOptions={{
                components: {
                  code: Code,
                },
              }}
            />
            <MDEditor.Markdown source={markdownStr} components={{ code: Code }} />
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
