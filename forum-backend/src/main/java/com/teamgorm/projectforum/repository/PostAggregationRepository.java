package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.dto.PostDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostAggregationRepository {
    Page<PostDTO> findAllWithUser(Pageable pageable);
}
