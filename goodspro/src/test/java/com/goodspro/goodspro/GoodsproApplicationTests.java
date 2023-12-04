package com.goodspro.goodspro;

import com.goodspro.goodspro.dto.BoardDto;
import com.goodspro.goodspro.service.BoardServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GoodsproApplicationTests {

	@Autowired
	BoardServiceImpl boardService;
	@Test
	void contextLoads() {
	}

	@Test
	void saveByForeach(){
		for(int i=1; i<=1000; i++){
			BoardDto params = new BoardDto();
			params.setBoardTitle(i + "번 게시글 제목");
			params.setBoardContent(i + "번 게시글 내용");
			boardService.insert(params);
		}
	}

}
