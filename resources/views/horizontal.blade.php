@php
    $html_tag_data = ["override"=>'{ "attributes" : { "placement" : "horizontal", "layout":"boxed" }, "storagePrefix" : "starter-project", "showSettings" : false }'];
    $title = 'Horizontal Starter Page';
    $description = 'An empty page with a boxed horizontal layout.';
    $breadcrumbs = ["/"=>"Home"]
@endphp
@extends('layout',['html_tag_data'=>$html_tag_data, 'title'=>$title, 'description'=>$description])

{{--@section('js_page')--}}
{{--    <script src="{{ asset('build/assets/js/pages/horizontal.js') }}"></script>--}}
{{--@endsection--}}
@push('css')
    <link rel="stylesheet" href="{{ asset('build/assets/css/vendor/glide.core.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('build/assets/css/vendor/introjs.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('build/assets/css/vendor/select2.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('build/assets/css/vendor/select2-bootstrap4.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('build/assets/css/vendor/plyr.css') }}"/>
@endpush
@push('js_vendor')
    <script src="{{ asset('build/assets/js/vendor/Chart.bundle.min.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/chartjs-plugin-datalabels.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/chartjs-plugin-rounded-bar.min.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/glide.min.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/intro.min.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/select2.full.min.js') }}"></script>
    <script src="{{ asset('build/assets/js/vendor/plyr.min.js') }}"></script>
@endpush
@push('js_page')
    <script src="{{ asset('build/assets/js/cs/glide.custom.js') }}"></script>
    <script src="{{ asset('build/assets/js/cs/charts.extend.js') }}"></script>
@endpush

@section('content')
    <div class="container">
        <livewire:dashboard :description="$description" :breadcrumbs="$breadcrumbs" :title="$title" />
    </div>
@endsection
