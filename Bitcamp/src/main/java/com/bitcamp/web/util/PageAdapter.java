package com.bitcamp.web.util;

import org.springframework.stereotype.Component;
import com.bitcamp.web.domain.Page;

@Component
public class PageAdapter {
	public Object attr(Page page) {
	  /*page.setTotalCount(count);*/
		System.out.println("전체 게시글 수 : " + page.getTotalCount());
		page.setTotalPage(0);
		System.out.println("전체 페이지 수 : " + page.getTotalPage());
		page.setTotalBlock(0);
		System.out.println("블록 개수 : " + page.getTotalBlock());
		page.setCurBlock(0);
		System.out.println("현재 블록 위치 : " + page.getCurBlock());
		page.setPageEnd(0);
		System.out.println("페이지 엔드 : " + page.getPageEnd());
		page.setPageStart(0);
		System.out.println("페이지 스타트 : " + page.getPageStart());
		page.setPrevBlock(false);
		System.out.println("전 블록 : "+page.isPrevBlock());
		page.setNextBlock(false);
		System.out.println("후 블록 : "+page.isNextBlock());
		page.setStartRow(0);
		System.out.println("로우 스타트 : " + page.getStartRow());
		page.setEndRow(0);
		System.out.println("로우 엔드 : " + page.getEndRow());
		page.setNextPageNum(0);
		System.out.println("다음 페이지 : " + page.getNextPageNum());
		page.setPrevPageNum(0);
		System.out.println("이전 페이지 : " + page.getPrevPageNum());
		return page;
	}
	
}
