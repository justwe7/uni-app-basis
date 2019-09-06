<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	

/* width */
$valArr: 170 164 135 124 100 96 92 90 60 58 36 30 28;
@each $val in $valArr {
  .f-width-#{$val} {
    width: $val + rpx;
  }
}

/* height */
$valArr: 164 120 100 92 90 80 60 58 56 52 36 30 28;
@each $val in $valArr {
  .f-height-#{$val} {
    height: $val + rpx;
  }
}

/* padding */

$valArr: 5 10 20 36;
@each $val in $valArr {
  .f-pd-#{$val} {
    padding: $val + rpx;
  }
}

$valArr: 10 16 19 20 24 28 30 40 70;
@each $val in $valArr {
  .f-pt-#{$val} {
    padding-top: $val + rpx;
  }
}

$valArr: 10 24 40 60 70 80 90 100 200;
@each $val in $valArr {
  .f-pr-#{$val} {
    padding-right: $val + rpx;
  }
}

$valArr: 10 16 20 24 28 30 40 50 70;
@each $val in $valArr {
  .f-pb-#{$val} {
    padding-bottom: $val + rpx;
  }
}

$valArr: 10 18 19 24 40 60 70 80 90 100 200;
@each $val in $valArr {
  .f-pl-#{$val} {
    padding-left: $val + rpx;
  }
}

/* margin */

$mrArr: 5 10 12 20 24 30 40;
@each $val in $mrArr {
  .f-mr-#{$val} {
    margin-right: $val + rpx;
  }
}

$mbArr: 10 12 20 24 28 40 50 80 100;
@each $val in $mbArr {
  .f-mb-#{$val} {
    margin-bottom: $val + rpx;
  }
}

$mtArr: 4 10 16 18 19 20 28 30 32 40 46 48 50 60 80 100;
@each $val in $mtArr {
  .f-mt-#{$val} {
    margin-top: $val + rpx;
  }
}

/* font */

$fzArr: 18 20 22 24 26 28 30 32 36 40 42 44 48 60 64;
@each $val in $fzArr {
  .f-fz-#{$val} {
    font-size: $val + rpx;
  }
}

</style>