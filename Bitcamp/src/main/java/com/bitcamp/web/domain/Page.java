package com.bitcamp.web.domain;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Page {
	int pageNum,
	totalCount, 
	totalPage,
	totalBlock,
	curBlock,
	pageSize, 
	blockSize, 
	startRow, 
	endRow, 
	pageStart, 
	pageEnd,
	nextPageNum,
	prevPageNum;
	boolean nextBlock, prevBlock;
	List<?> list;
	
	public int getCurBlock() {
		return curBlock;
	}
	public void setCurBlock(int curBlock) {
		this.curBlock = (int) (Math.ceil((pageNum-1)/blockSize)+1);
	}
	public int getTotalBlock() {
		return totalBlock;
	}
	public void setTotalBlock(int totalBlock) {
			this.totalBlock = (int) Math.ceil(totalPage*1.0/blockSize);
	}
	public int getNextPageNum() {
		return nextPageNum;
	}
	public void setNextPageNum(int nextPageNum) {
		if(nextBlock) {
			this.nextPageNum = pageEnd+1;
		} else {
			this.nextPageNum = nextPageNum;
		}
	}
	public int getPrevPageNum() {
		return prevPageNum;
	}
	public void setPrevPageNum(int prevPageNum) {
			this.prevPageNum = pageStart-blockSize;
	}
	public boolean isPrevBlock() {
		return prevBlock;
	}
	public void setPrevBlock(boolean prevBlock) {
		this.prevBlock = (pageNum != 1);
	}
	public boolean isNextBlock() {
		return nextBlock;
	}
	public void setNextBlock(boolean nextBlock) {
		this.nextBlock = (totalPage > pageEnd) ;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getBlockSize() {
		return blockSize;
	}
	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = (pageNum-1)*pageSize+1;
	}
	public int getEndRow() {
		return endRow;
	}
	public void setEndRow(int endRow) {
		this.endRow = (pageNum)*pageSize;
	}
	public int getPageStart() {
		return pageStart;
	}
	public void setPageStart(int pageStart) {
		if(totalBlock == curBlock) {
			this.pageStart = curBlock*blockSize-blockSize+1;
		} else {
			this.pageStart = (pageEnd-blockSize)+1;
		}
	}
	public int getPageEnd() {
		return pageEnd;
	}
	public void setPageEnd(int pageEnd) {
		if(totalBlock == curBlock) {
			this.pageEnd = totalPage;
		} else {
			this.pageEnd = (int) Math.ceil(pageNum*1.0/blockSize)*blockSize;
		}
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = (int) Math.ceil(totalCount*1.0/pageSize);
	}

}
