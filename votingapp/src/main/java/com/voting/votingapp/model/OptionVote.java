package com.voting.votingapp.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class OptionVote {
    private String optionText;
    private Integer voteCount = 0;

    public String getOptionText() {
        return optionText;
    }

    public void setOptionText(String voteOption) {
        this.optionText = voteOption;
    }

    public Integer getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(Integer voteCount) {
        this.voteCount = voteCount;
    }
}
