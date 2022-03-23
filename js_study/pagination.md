# Pagination
```java
@Data
// @...
public class PageWrapper<E> {

  // @...
  private Integer page;
  // @...
  private Integer size;
  // @...
  private Integer totalElements;
  // @...
  private List<E> list;
  // @...
  private Boolean isEmpty;
  // @...
  private Pagination pagination;

  public Boolean getIsEmpty() {
    return this.list.isEmpty();
  }

  public Pagination getPagination() {
    if (Objects.isNull(this.pagination)) {
      this.pagination = new Pagination(this.page, this.size, this.totalElements);
    }

    return this.pagination;
  }

  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public static class Pagination {
    // @...
    private Integer currentPage;
    // @...
    private Integer totalPages;
    // @...
    private Boolean isPrev;
    // @...
    private Boolean isNext;
    // @...
    private Integer startPage;
    // @...
    private Integer lastPage;

    public Pagination(Integer page, Integer size, Integer totalElements) {
      pagination(page, size, totalElements, 10);
    }

    public Pagination(Integer page, Integer size, Integer totalElements, Integer drawSize) {
      pagination(page, size, totalElements, drawSize);
    }

    private void pagination(Integer page, Integer size, Integer totalElements, Integer drawSize) {
      /*
       * pagination 로직을 진행하기 위한 필수 조건이 없는 경우 메서드 종료
       */
      if (!(!Objects.isNull(page) && !Objects.isNull(size)
          && !Objects.isNull(totalElements) && totalElements > 0)) {
        return;
      }

      int currentPage = page;
      Number totalPageNumber = Math.ceil(totalElements.doubleValue() / size.doubleValue());
      int totalPageCount = totalPageNumber.intValue();
      boolean isEven = drawSize % 2 == 0;
      Number medianNumber = Math.floor(drawSize.doubleValue() / 2);
      int median = medianNumber.intValue();
      int beforeMedian = isEven ? median - 1 : median;

      if (drawSize < 1) {
        drawSize = 10;
      }

      if (currentPage < 1) {
        currentPage = 1;
      }

      if (currentPage > totalPageCount) {
        currentPage = totalPageCount;
      }

      if (totalPageCount < drawSize) {
        drawSize = totalPageCount;
      }

      int startPage = currentPage > beforeMedian ? currentPage - beforeMedian : 1;
      int lastPage = currentPage + median;

      if (currentPage <= median) {
        startPage = 1;
        lastPage = drawSize;
      } else if (currentPage >= (totalPageCount - median)) {
        startPage = totalPageCount > drawSize ? totalPageCount - (drawSize - 1) : 1;
        lastPage = totalPageCount;
      }

      this.currentPage = currentPage;
      this.totalPages = totalPageCount;
      this.isPrev = currentPage > 1;
      this.isNext = currentPage < totalPageCount;
      this.startPage = startPage;
      this.lastPage = lastPage;
    }
  }

}
```
```javascript
function drawPagination (selector, pagination, callback) {
    const element = $(selector);
    const currentPage = pagination.currentPage;
    const totalPages = pagination.totalPages;
    const startPage = pagination.startPage;
    const lastPage = pagination.lastPage;

    element.empty();

    element.append('<ul class="pagination">');

    element.append('<li id="' + selector + '-first" class="page-item">');
    element.append('<a class="page-link" href="javascript:void(0);">&laquo;</a>');
    element.append('</li>');
    
    element.append('<li id="' + selector + '-prev" class="page-item">');
    element.append('<a class="page-link" href="javascript:void(0);">&lsaquo;</a>');
    element.append('</li>');

    for (let i = startPage; i <= lastPage; i++) {
        element.append('<li class="page-item' + (currentPage !== i ? '' : ' active') + '">');
        element.append('<a class="page-link" href="javascript:void(0);" data-value="' + i + '">' + i + '</a>');
        element.append('</li>');
    }

    element.append('<li id="' + selector + '-next" class="page-item">');
    element.append('<a class="page-link" href="javascript:void(0);">&rsaquo;</a>');
    element.append('</li>');
    
    element.append('<li id="' + selector + '-last" class="page-item">');
    element.append('<a class="page-link" href="javascript:void(0);">&raquo;</a>');
    element.append('</li>');

    element.append('</ul>');

    if (pagination.isPrev) {
        $(selector + '-first').data('value', 1);
        $(selector + '-prev').data('value', (currentPage - 1));
    } else {
        $(selector + '-first').addClass('disabled');
        $(selector + '-prev').addClass('disabled');
    }

    if (pagination.isNext) {
        $(selector + '-last').data('value', totalPages);
        $(selector + '-next').data('value', (currentPage + 1));
    } else {
        $(selector + '-last').addClass('disabled');
        $(selector + '-next').addClass('disabled');
    }

    $(selector)
            .find('.pagination > li.page-item:not(.disabled) > a.page-link')
            .off('click')
            .on('click', function (event) {
                const pageValue = $(event.target).data('value');

                callback(pageValue);
            });
}
```
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <!-- link`s ... -->

    <!-- script`s ... -->

    <title>TITLE</title>
</head>
<body>
    <div id="wrapper-first">
        <div class="wrapper-grid"></div>
        <div class="wrapper-pagination"></div>
    </div>
    
    <div id="wrapper-second">
        <div class="wrapper-grid"></div>
        <div class="wrapper-pagination"></div>
    </div>
    
    <div id="wrapper-third">
        <div class="wrapper-grid"></div>
        <div class="wrapper-pagination"></div>
    </div>

    <script>
        $(function () {
            pagingFirst(1);
            pagingSecond(1);
            pagingThird(1);
        });

        function pagingFirst(pageNumber) {
            const parameters = /* Parameter Settings... */;
            const http = /* Ajax... */;

            http.done(function (result) {
                /* $('#wrapper-first > .wrapper-grid') Draw Grid... */
                drawPagination('#wrapper-first > .wrapper-pagination', result.pagination, pagingFirst);
            });
        }

        function pagingSecond(pageNumber) {
            const parameters = /* Parameter Settings... */;
            const http = /* Ajax... */;

            http.done(function (result) {
                /* $('#wrapper-second > .wrapper-grid') Draw Grid... */
                drawPagination('#wrapper-second > .wrapper-pagination', result.pagination, pagingSecond);
            });
        }

        function pagingThird(pageNumber) {
            const parameters = /* Parameter Settings... */;
            const http = /* Ajax... */;

            http.done(function (result) {
                /* $('#wrapper-third > .wrapper-grid') Draw Grid... */
                drawPagination('#wrapper-third > .wrapper-pagination', result.pagination, pagingThird);
            });
        }
    </script>
</body>
</html>
```