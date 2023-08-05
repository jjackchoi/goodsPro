package com.goodspro.goodspro.boardDto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BoardDto {
	int boardSeq; // 게시판번호
	String boardTitle; // 게시판제목
	String boardContent; // 게시판내용
	Date regDatetime; // 게시판 등록일시
	public BoardDto(int boardSeq, String boardTitle, String boardContent, Date regDatetime) {
		super();
		this.boardSeq = boardSeq;
		this.boardTitle = boardTitle;
		this.boardContent = boardContent;
		this.regDatetime = regDatetime;
	}
	
	public BoardDto() {
		super();
	}
	public int getBoardSeq() {
		return boardSeq;
	}
	public void setBoardSeq(int boardSeq) {
		this.boardSeq = boardSeq;
	}
	public String getBoardTitle() {
		return boardTitle;
	}
	public void setBoardTitle(String boardTitle) {
		this.boardTitle = boardTitle;
	}
	public String getBoardContent() {
		return boardContent;
	}
	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}
	public Date getRegDatetime() {
		return regDatetime;
	}
	public void setRegDatetime(Date regDatetime) {
		this.regDatetime = regDatetime;
	}
	
	
}
