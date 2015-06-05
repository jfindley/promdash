//= require spec_helper
describe('GraphiteDataTransformer', function() {
  var xfr;
  beforeEach(inject(function(_GraphiteDataTransformer_) {
     xfr = _GraphiteDataTransformer_;
  }));

  it("transforms the data", function() {
    var sampleData = [[null,1433413440],[10.883333333333333,1433413500],[12.566666666666666,1433413560],[12.35,1433413620],[10.2,1433413680],[11.283333333333333,1433413740],[11.666666666666666,1433413800],[11.7,1433413860],[10.35,1433413920],[12.266666666666666,1433413980],[11.783333333333333,1433414040],[14.549999999999999,1433414100],[10.55,1433414160],[12.883333333333333,1433414220],[10.366666666666667,1433414280],[10.416666666666666,1433414340],[11.45,1433414400],[11.75,1433414460],[13.333333333333334,1433414520],[11.616666666666667,1433414580],[10.816666666666666,1433414640],[10.683333333333334,1433414700],[11.966666666666667,1433414760],[12.066666666666666,1433414820],[9.966666666666667,1433414880],[16.2,1433414940],[13.25,1433415000],[14.866666666666667,1433415060],[10.433333333333334,1433415120],[15.65,1433415180],[11.416666666666666,1433415240],[10.5,1433415300],[11.866666666666667,1433415360],[12.666666666666666,1433415420],[10.283333333333333,1433415480],[15.766666666666666,1433415540],[11.833333333333334,1433415600],[12.166666666666666,1433415660],[11.083333333333334,1433415720],[14.233333333333333,1433415780],[13.383333333333333,1433415840],[10.95,1433415900],[13.75,1433415960],[15.916666666666666,1433416020],[11,1433416080],[11.133333333333333,1433416140],[17.65,1433416200],[14.283333333333333,1433416260],[14.633333333333333,1433416320],[19.666666666666668,1433416380],[14.7,1433416440],[13.366666666666667,1433416500],[19.233333333333334,1433416560],[22.03333333333333,1433416620],[14.683333333333334,1433416680],[13.633333333333333,1433416740],[12.666666666666666,1433416800],[11.866666666666667,1433416860],[14.466666666666667,1433416920],[5.033333333333333,1433416980]];
    var data = {
      exp_id:0,
      type: "graphite",
      data:{
        target:"public",
        datapoints: sampleData
      }
    };
    var axisIDObj = {0: 1, 1: 10, 2: 20};

    var got = xfr(data, axisIDObj);

    var want = {
      name: "{public}",
      uniqName: "{public}",
      axisID: 1,
      type: "graphite",
      exp_id: 0,
      labels: {
        target: "public"
      },
      data: sampleData.map(function(d) { return {x: d[1], y: d[0]}; })
    };

    expect(got).toEqual(want);
  });
});
