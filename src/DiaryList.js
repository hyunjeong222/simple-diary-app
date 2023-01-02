import DiaryItem from "./DiaryItem";

// react는 단방향으로 데이터가 흐름
// 데이터는 위에서 아래로, 이벤트는 아래에서 위로

const DiaryList = ({ onEdit, onRemove, diaryList })=>{
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;