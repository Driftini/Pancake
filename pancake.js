document.getElementById("s42_start").children[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAALEAAACxAFbkZ0LAAAAB3RJTUUH5AYJCDoOf0vr2AAAAA9pVFh0Q29tbWVudAAAAAAASFVEIuro5AAABStJREFUWMPtmGmIVnUUxn/nnVfHPTWX1DFNy1aNUosUw5IW2giLkJIMP4Tgh4IK+iJthkJFUES2fAhKIyELbCFaFGSs1KZFM3dTx9RxSdNxm5n36YPP6/y9zZjOO1GQBy7v/d/33j/PPec55zznwhk7Y/+uxT+5uaQOwHnACOBKYKjXvYA8sBuoBlYDPwPLgBXAroioPw5QUllENGQ2j4hQC4GdC9wB3ARcCHQCyoH2Pk64Haj1cRjYBfwAfAxUImmSpCHJ5m0klbUAVE5ShaRRkt6UVKfSbKukxXngRmCxpE7Ag8AeYA7Q0ASIthFxNFl3AQ4BFwFTHcKVDmk+ebRg7+wANgLbgYNAW6AbMAgYYE8XrS/QNw/MiIi1kkYA9wDzI+KopAHAzcCXwFZgCjBE0ixgH/Aw0AP4ChgDPOCN9wF/+Hwv8A2wCPge2ALsN9h6IAe0Azqbl7cDk4GuDr3yEbHCm20HngUqJbUF3gCusEfuB6aZHxuAYcBEA/nd92GyLzfID4GlRY8VSX8SWylpM3A1MNr5EXnzTRFR7YxC0mDgHOBzYA0w05tU+sEbvF4BrAcqfP0D4CNgVUQcyCYdUFb0TAZc3tTZD+zM/tHQxNvsBCYB6yJiv6QvgG+B14CBwFp7ambisfuA64ElEbGsmDhFfK4I9c0kWBFDGVB3skyMZNM0O/s47Ejq7kztn6xfTrLv8ZZUAP/2lPR2msr5E6r2sbdUEpKIiAKwLamNe4DFyWOXA3cmSbG5lNrujG8McbMtJgGbuZa1o8Bv/p3rIkuJII9brhU62i/AbCfLZUD/EsG1OsA2QB9gHHCbQ/6f8uAFLvA5Z2BNa3IwJ+kaSRUlbnrAPHwFqGptD04BurmcjJM0VlK709hwgzn4k9tV99aUbHngMxP9EmA6sCAiFroEXeViXSNpHDDYnWIvcLcBLXNoR7unVgELW0uj5iNijmtcwWA/8X/TgVuBqZKuA161ApGBTbc6eQsYZXAkQqGl4FKp11ioI2Il8GQiOO+14t0OPGVZ9CvQO1EuBxNVssu9uKpEgLm/AGxCPdfZQ0sjYo2kTVYmM6zh6g38JUupA+7HsnJuNYBN9uMm+vNwSf28HiRpiqTrEwX+qKSdbp8PldCLe0manbTiuvzfvtIxz36XrDcAs5JbhlrJ9EhaX0sTo+kQN9dvT3Fw6mapfgSYZ+XcUsuZQs0DPAVxkLWNVs+XmpeF03Zfoyat8wjQCLCU8dJW41ljgmeY9cCSDL8GmgLlGQUlD121Lvh9gbNOAJgJaS5Rv6dq5xtcRTLBFUvVMGA4MNKTWxeLiyLfGpz9O4B1/m9QNoP6SurazJybK2Z1cZ3NdLfHjc66uZLGS5osqVLSkRLm4gZJtTngEYcAS/sBksojouBD5knB6jrLzS3Ap8B8Z3s/z9ejMoQv2mEPR/sc2qasYO8W8m5NmxySFz2pPW3APYDaiDhkxdPbE1utpGFAT6uYKmCsQ/p1hkc7fGw1z6pd2BucED3d44d4/97O5lwR4AwP6oN9cXVENEiaANwFPC+pDnjOHHpGUrnbXx3wjnl2sQEt8nh60EJioYf3Lc3NxhYmfTxfjwGu9ZeG+vSmjpJ6+fxsSasl1UgaKek986Ja0jRJS7zeLekFScu9XmQOVrgrtEgQm2rjJT2W9uLahBOdgQUO149AB5eEWZ7aOvq+911S2njIfz0iVpX8TTBiGzAv23bJfOFqn6wnSrrF56MlvSvpCXspJHVpqbfO2P/e/gTkvZA7E8RQlgAAAABJRU5ErkJggg=="

let pancakeDashboard = $file.getUrl("/a/.pancake/dashboard/dashboard.html",function(e){
    le._apps.pancake = {
        exec: function() {
            $window(
                {
                    url: e,
                    title: "Pancake Dashboard",
                    dockable: false,
                    minimizable: false,
                    width: 666,
                    height: 423,
                    baseClass: "dashboardWindow",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYMDh0ND9SEhwAAAGVJREFUOMvFUkEOwDAIKqb//zK7bIl1Tkl7GLdqQSSOcQgon0hyIQGQBCLxNR0ASNIrZuTY9z2LRd74Isea+UdnOcNUbFawnamLQJdBK/B7BvP4EpVDkhw8QhmxWq8MMHO247LEBU3dX/zBXEQ1AAAAAElFTkSuQmCC"
                }
            )
        },
        hascli: true,
        terminal: true
    }
})

var pancakeConfig = $file.open("/a/.pancake/config.json","String",function(e){pancakeConfig = e})