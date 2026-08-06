import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Header-BiOp660_.js";var r;function i(){return(i=e((()=>{t(),r=()=>{let e=document.createElement(`article`),t=null,r=null,i=()=>{let e=document.getElementsByTagName(`article`)[0];e.replaceChild(c(),e.firstChild)},a=()=>{t={name:`Jane Doe`},i()},o=()=>{t=null,i()},s=()=>{t={name:`Jane Doe`},i()},c=()=>n({onLogin:a,onLogout:o,onCreateAccount:s,user:t});return r=c(),e.appendChild(r),e.insertAdjacentHTML(`beforeend`,`
  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999" />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </section>
`),e}})))()}var a,o,s,c,l,u,d;function f(){return(f=e((()=>{i(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Example/Page`,render:()=>r(),parameters:{layout:`fullscreen`}},l={},u={play:async({canvasElement:e})=>{let t=s(e),n=t.getByRole(`button`,{name:/Log in/i});await a(n).toBeInTheDocument(),await o.click(n),await a(n).not.toBeInTheDocument();let r=t.getByRole(`button`,{name:/Log out/i});await a(r).toBeInTheDocument()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}},d=[`LoggedOut`,`LoggedIn`]})))()}f();export{u as LoggedIn,l as LoggedOut,d as __namedExportsOrder,c as default};