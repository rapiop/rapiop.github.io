(() => {
    const APP = window._MY_ANOTHER_APP;
    APP.register(
        'home',
        mountDOM => {
            const content = document.createElement('div');
            content.innerHTML = `
            <p>this is home for anotherApp</p>
`;
            const button = document.createElement('button');
            button.innerText = 'click to jump to other project';
            button.onclick = () => {
                APP.jumpTo('other');
            };
            content.appendChild(button);
            mountDOM.appendChild(content);
            console.log('home mounted');
        },
        mountDOM => {
            mountDOM.innerHTML = null;
            console.log('home unmounted');
        }
    );
})();
