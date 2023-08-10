package com.goodspro.goodspro.service;

import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodspro.goodspro.boardDto.BoardDto;


@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int insert(BoardDto boardDto) {
		System.out.println(boardDto.getBoardTitle()+boardDto.getBoardContent());
		return sqlSession.insert("com.example.demo.mapper.BoardMapper.insert",boardDto);
	}

	@Override
	public List<BoardDto> findAll() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("com.example.demo.mapper.BoardMapper.findAll");
	}
}
