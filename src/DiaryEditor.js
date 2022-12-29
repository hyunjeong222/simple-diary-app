import { useState } from "react";

const DiaryEditor = ()=>{
    const [state, setState] = useState({
        author: "",
        content: "",
    });
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name = "author"
                value={state.author} 
                onChange={(e) => {
                    setState({
                        ...state, 
                        // 원래 있던 state를 펼쳐주고 나서 변경하고자 하는 state의 property 적어준다. -> 순서가 바뀌면 업데이트된 값에 원래 값이 덮어씌워짐
                        author: e.target.value,
                    });
                }}
            />
        </div>
        <div>
            <textarea 
            value={state.content}
            onChange={(e)=>{
                setState({
                    ...state,
                    content: e.target.value,
                });
            }}
            />
        </div>
    </div>
}
export default DiaryEditor;