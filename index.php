<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test page</title>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-xVVam1KS4+Qt2OrFa+VdRUoXygyKIuNWUUUBZYv+n27STsJ7oDOHJgfF0bNKLMJF" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 border rounded mb-5 mb-md-0">
                <div class="row w-100 border-bottom m-0 py-2">
                    <div class="col-6">Муниципалитет:</div>
                    <div class="col-6">Грозный</div>
                </div>
                <div class="row w-100 border-bottom m-0 py-2">
                    <div class="col-6">Школа:</div>
                    <div class="col-6">Первая гимназия</div>
                </div>
                <div class="row w-100 border-bottom m-0 border-md-0 py-2">
                    <div class="col-6">Код школы:</div>
                    <div class="col-6">6877</div>
                </div>
            </div>
            <div class="col-12 col-md-6 border rounded">
                <div class="row">
                    <div class="row w-100 border-bottom m-0 py-2">
                        <div class="col-12">
                            Общее количество участников:
                        </div>
                    </div>
                </div>
                <div class="row w-100 border-bottom m-0 py-2">
                    <div class="col-6">
                        Математика
                    </div>
                    <div class="col-6">
                        1222
                    </div>
                </div>
                <div class="row w-100 border-bottom m-0 py-2">
                    <div class="col-6">
                        Русский язык
                    </div>
                    <div class="col-6">
                        67
                    </div>
                </div>
                <div class="row w-100 border-bottom m-0 py-2">
                    <div class="col-6">
                        Обществознание
                    </div>
                    <div class="col-6">
                        45
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="row w-100">
                <div class="col-12 text-center">
                    <div class="form-text text-muted">Для отображения участников необходимо выбрать предмет</div>
                </div>
            </div>
            <div class="row w-100 mt-5">
                <div class="col-12 text-center">
                    <!-- Example single danger button -->
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle px-5 py-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Предмет
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Математика</a>
                            <a class="dropdown-item" href="#">Русский язык</a>
                            <a class="dropdown-item" href="#">Обществознание</a>
                            <!--                        <div class="dropdown-divider"></div>-->
                            <!--                        <a class="dropdown-item" href="#">Отдельная ссылка</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row mt-5 d-flex justify-content-end">
        <button class="btn btn-outline-success"> Следующие недели </button>
    </div> -->
        <nav class='row mt-5 d-flex justify-content-end' aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item previous"><button class="btn btn-outline-success previous"> Предыдущие недели </button></li>
                <li class="page-item next"><button class="btn btn-outline-success next"> Следующие недели </button></li>
            </ul>
        </nav>
        <div class="row  mt-1 border rounded">
            <div class="col-6 border-right col-md-4">
                <div class="row m-0">
                    <div class="row m-0 py-2 font-weight-bold border-bottom w-100">
                        ФИО:
                    </div>
                </div>
                <div class="row m-0">
                    <div class="row m-0 py-2">
                        Ибрагимов Ислам Магомедович
                    </div>
                    <div class="row m-0 py-2">
                        Ибрагимов Ислам Магомедович
                    </div>
                    <div class="row m-0 py-2">
                        Ибрагимов Ислам Магомедович
                    </div>
                </div>
            </div>
            <div class="col-6  m-0 col-md-8" id="tableCol">
                <div class="row w-100 m-0 py-2 border-bottom" id="weeks-count">
                    <div class="col-1 text-center border d-none">1</div>
                    <div class="col-1 text-center border d-none">2</div>
                    <div class="col-1 text-center border d-none">3</div>
                    <div class="col-1 text-center border d-none">4</div>
                    <div class="col-1 text-center border d-none">5</div>
                    <div class="col-1 text-center border d-none">6</div>
                    <div class="col-1 text-center border d-none">7</div>
                    <div class="col-1 text-center border d-none">8</div>
                    <div class="col-1 text-center border d-none">9</div>
                    <div class="col-1 text-center border d-none">10</div>
                    <div class="col-1 text-center border d-none">11</div>
                    <div class="col-1 text-center border d-none">12</div>
                    <div class="col-1 text-center border d-none">13</div>
                    <div class="col-1 text-center border d-none">14</div>
                    <div class="col-1 text-center border d-none">15</div>
                    <div class="col-1 text-center border d-none">16</div>
                    <div class="col-1 text-center border d-none">17</div>
                    <div class="col-1 text-center border d-none">18</div>
                    <div class="col-1 text-center border d-none">19</div>
                    <div class="col-1 text-center border d-none">20</div>
                    <div class="col-1 text-center border d-none">21</div>
                    <div class="col-1 text-center border d-none">22</div>
                    <div class="col-1 text-center border d-none">23</div>
                    <div class="col-1 text-center border d-none">24</div>
                    <div class="col-1 text-center border d-none">25</div>
                    <div class="col-1 text-center border d-none">26</div>
                    <div class="col-1 text-center border d-none">27</div>
                    <div class="col-1 text-center border d-none">28</div>
                    <div class="col-1 text-center border d-none">29</div>
                    <div class="col-1 text-center border d-none">30</div>
                    <div class="col-1 text-center border d-none">31</div>
                    <div class="col-1 text-center border d-none">32</div>
                    <div class="col-1 text-center border d-none">33</div>
                    <div class="col-1 text-center border d-none">34</div>
                    <div class="col-1 text-center border d-none">35</div>
                    <div class="col-1 text-center border d-none">36</div>
                    <div class="col-1 text-center border d-none">37</div>
                </div>
                <div class="row w-100 m-0 py-2 border-bottom" id="">
                    <!-- <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text">
                    <input class="col-1 text-center border" maxlength="1" type="text"> -->
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <!-- scripts -->
    <script src="./pagination.js"></script>
    <script>
        $('input').on('input', function() {
            this.value = this.value.replace(/[^0-1]/g, '');
        });
    </script>
</body>