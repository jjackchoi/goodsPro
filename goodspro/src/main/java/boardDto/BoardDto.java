package boardDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BoardDto {
	String boardSeq; // 게시판번호
	String boardTitle; // 게시판제목
	String boardContent; // 게시판내용
	String regDatetime; // 게시판 등록일시
}
