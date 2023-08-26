// Todo List의 항목들을 저장할 배열
let todos = [];

// DOM 요소들을 가져옴
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// 추가 버튼 클릭 시 이벤트 처리
addButton.addEventListener("click", function () {
  const inputValue = todoInput.value; // 입력한 값을 가져옴
  if (inputValue !== "") {
    // 입력값이 비어있지 않으면 새로운 항목을 배열에 추가하고 화면에 표시
    todos.push(inputValue);
    renderTodos();
    todoInput.value = ""; // 입력 필드 초기화
  }
});

// Todo 항목을 화면에 표시하는 함수
function renderTodos() {
  todoList.innerHTML = ""; // Todo List를 초기화

  // Todo 배열을 순회하며 각 항목을 화면에 표시
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.innerText = todo;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", function () {
      // 삭제 버튼 클릭 시 해당 항목을 배열에서 제거하고 화면을 다시 렌더링
      todos.splice(index, 1);
      renderTodos();
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}
